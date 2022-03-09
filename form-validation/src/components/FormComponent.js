import './FormComponent.css'

const FormComponent = () => {
  return (
    <div className="container">
      <form className="form">
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input type="text" />
          <small>error mesages</small>
        </div>
      </form>

      <form className="form">
        <div className="form-control">
          <label>อีเมล</label>
          <input type="text" />
          <small>error mesages</small>
        </div>
      </form>

      <form className="form">
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input type="text" />
          <small>error mesages</small>
        </div>
      </form>

      <form className="form">
        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input type="text" />
          <small>error mesages</small>
        </div>

        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponent;
