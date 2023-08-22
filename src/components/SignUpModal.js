import React from "react"

export default function SignUpModal() {
  return (
    <>
      <div className="position-fixed top-0 start-0 vw-100 vh-100 ">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div className="position-relative p-3" style={{ minWidth: "400px" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button type="button" className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">
                        Password
                      </label>
                      <input
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="repeatPwd" className="form-label">
                        Repeat Password
                      </label>
                      <input
                        name="repeatPwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      />
                      <p className="text-danger mt-1">Validation</p>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
