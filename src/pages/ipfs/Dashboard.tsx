import { useEffect, useState } from 'react';
import './Dashboard.scss';

const API_URL = import.meta.env.VITE_API_URL || "https://frontend-api.sporeproject.com";

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const session_id = localStorage.getItem("ipfs_session_id");
    if (!session_id) return;

    const resp = await fetch(`${API_URL}/ipfs/user/info`, {
      headers: { Authorization: `Bearer ${session_id}` },
    });
    if (!resp.ok) {
      localStorage.removeItem("ipfs_session_id");
      window.location.reload();
      return;
    }
    const data = await resp.json();
    setUserInfo(data);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fileInput = e.currentTarget.elements.namedItem("file") as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) {
      setMessage("No file selected.");
      return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    setMessage(null);

    const session_id = localStorage.getItem("ipfs_session_id");
    const resp = await fetch(`${API_URL}/ipfs/upload`, {
      method: "POST",
      headers: { Authorization: `Bearer ${session_id}` },
      body: formData,
    });

    const result = await resp.json();
    setUploading(false);

    if (resp.ok) {
      setMessage(`✅ File uploaded! CID: ${result.cid}`);
      fetchInfo(); // refresh
    } else {
      setMessage(`❌ Error: ${result.error}`);
    }

    fileInput.value = ""; // reset file input
  };

  const handleUnpin = async (cid: string) => {
    if (!confirm(`Are you sure you want to unpin file ${cid}?`)) return;

    setMessage(null);
    const session_id = localStorage.getItem("ipfs_session_id");
    const resp = await fetch(`${API_URL}/ipfs/unpin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session_id}`,
      },
      body: JSON.stringify({ cid }),
    });

    const result = await resp.json();
    if (resp.ok) {
      setMessage(`✅ File unpinned! CID: ${cid}`);
      fetchInfo();
    } else {
      setMessage(`❌ Error: ${result.error}`);
    }
  };

  if (!userInfo) return <p>Loading dashboard…</p>;

  const percentUsed = ((userInfo.used / userInfo.quota) * 100).toFixed(1);
  const freeSpace = (userInfo.quota - userInfo.used).toFixed(2);

return (
  <div className="dashboard">
    <h2>IPFS Dashboard</h2>

    <div className="dashboard-panels">
      {/* Left Panel */}
      <div className="panel panel-info">
        <p><strong>Total uploads:</strong> {userInfo.num_objects}</p>
        <p><strong>Node space used:</strong> {userInfo.repo_size_mb} MB / {userInfo.storage_max_mb} MB</p>

        <p><strong>Wallet:</strong> {userInfo.wallet}</p>
        <p><strong>Eligible for upload:</strong> {userInfo.eligible ? "✅ Yes" : "❌ No"}</p>
        <p><strong>SPORE balance:</strong> {userInfo.spore_balance}</p>
        <p><strong>NFTs owned:</strong> {userInfo.nft_balance}</p>

        <p>
          <strong>Your quota:</strong> {userInfo.used} MB used / {userInfo.quota} MB total<br/>
          <strong>Free:</strong> {freeSpace} MB ({percentUsed}% used)
        </p>
      </div>

      {/* Right Panel */}
      <div className="panel panel-info">
        <h3>Your files:</h3>
        {userInfo.files.length === 0 ? (
          <p>No files uploaded yet.</p>
        ) : (
          <ul>
            {userInfo.files.map((file: any) => (
              <li key={file.cid}>
                {file.filename} — {file.size} bytes —{" "}
                <a href={`https://ipfs.sporeproject.com/ipfs/${file.cid}`} target="_blank" rel="noreferrer">View</a>{" "}
                <button onClick={() => handleUnpin(file.cid)}>Unpin</button>
              </li>
            ))}
          </ul>
        )}

        <h3>Upload a new file</h3>
        <form onSubmit={handleUpload}>
          <input type="file" name="file" disabled={uploading} />
          <button type="submit" disabled={uploading}>
            {uploading ? "Uploading…" : "Upload & Pin"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  </div>
);


}
