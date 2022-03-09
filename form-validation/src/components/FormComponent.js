import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepassword, setErrorRepassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [userEmailColor, setEmailColor] = useState("");

  const [passwordColor, setPasswordColor] = useState("");
  const [repasswordColor, setRepasswordColor] = useState("");



  const validateForm = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      setErrorUsername("");
      setUserNameColor('green')
    } else {
      setErrorUsername("ชื่อผู้ใช้ต้องมีความยาวมากกว่า 8 ตัวอักษร");
      setUserNameColor('red')
    }
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor('green');
    } else {
      setErrorEmail("รูปเเบบ email ไม่ถูกต้อง");
      setEmailColor('red');
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor('green')
    } else {
      setErrorPassword("รหัสผ่านต้องมีความยาวมากกว่า 8 ตัวอักษร");
      setPasswordColor('red')
    }
    if(repassword !== "" && repassword === password) {
      setErrorRepassword("")
      setRepasswordColor('green')
    }else {
      setErrorRepassword("รหัสผ่านไม่ตรงกัน")
      setRepasswordColor('red')

    }
  };

  return (
    <>
      <div className="container" onSubmit={validateForm}>
        <h2>Register</h2>
        <form className="form">
          <div className="form-control">
            <label>ชื่อผู้ใช้</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{borderColor: userNameColor}}
            />
            <small style={{color: userNameColor}}>{errorUsername}</small>
          </div>
        </form>

        <form className="form">
          <div className="form-control">
            <label>อีเมล</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{borderColor: userEmailColor}}
            />
            <small style={{color: userEmailColor}}> {errorEmail}</small>
          </div>
        </form>

        <form className="form">
          <div className="form-control">
            <label>รหัสผ่าน</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{borderColor: passwordColor}}
              
            />
            <small style={{color: passwordColor}} >{errorPassword}</small>
          </div>
        </form>

        <form className="form">
          <div className="form-control">
            <label>ยืนยันรหัสผ่าน</label>
            <input
              type="password"
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              style={{borderColor: repasswordColor}}
            />
            <small style={{color: repasswordColor}} >{errorRepassword}</small>
          </div>

          <button type="submit"  >ลงทะเบียน</button>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
