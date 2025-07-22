import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Helmet } from 'react-helmet';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const API_URL = import.meta.env.VITE_API_URL || "https://frontend-api.sporeproject.com";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!address) {
      alert("Please connect wallet first");
      return;
    }

    setLoading(true);

    try {
      const challengeResp = await fetch(`${API_URL}/ipfs/challenge?wallet=${address}`);

      const { message } = await challengeResp.json();
      console.log(message)

      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, address],
      });

      const loginResp = await fetch(`${API_URL}/ipfs/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ wallet: address, message, signature }),
});

if (!loginResp.ok) {
  const text = await loginResp.text();
  console.error("Login API returned error:", text);
  throw new Error("Login failed");
}

const loginData = await loginResp.json();

if (!loginData.session_id) {
  throw new Error("Invalid login");
}


      localStorage.setItem("ipfs_session_id", loginData.session_id);
      onLogin();

    } catch (e) {
      console.error(e);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const Metadata = () => (
    <Helmet>
      <title>Spore IPFS Login - Spore</title>
      <meta name='description' content='Log in to Spore IPFS file storage using your wallet.' />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );

  return (
    <>
      <Metadata />
      <div className="container py-5 text-center">
        <h2 className="pb-3">Spore IPFS Storage</h2>

        <p>Please connect your wallet and sign the message to log in.</p>

        <div className="py-3">
          <ConnectButton />
        </div>

        {address && (
          <button
            onClick={handleLogin}
            disabled={loading}
            className="btn btn-primary mt-3"
          >
            {loading ? "Logging in…" : "Sign & Log In"}
          </button>
        )}
      </div>
    </>
  );
};

export default Login;


