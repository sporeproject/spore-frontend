import React from "react";

export const UnlockMetamask = (props: any) => {
  return (
    <section className="bg-white" >
      <div className="container align-items-center d-flex justify-content-center" >

        <div className="text-center" >
          <p className="alert alert-danger  py-3 px-5" > {props.message} </p>
        </div>
      </div>
    </section>
  );
}

export default UnlockMetamask;
