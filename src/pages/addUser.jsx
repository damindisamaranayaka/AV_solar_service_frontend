import './addUser.css';
import Layout from '../components/layout.jsx';

const Adduser = () => {
    return (
        <Layout>
            <div className="userAddContainer">
                <h2 className="addUsertitle">Users</h2>

                <form className="userForm">
                    <div className="formGroup">
                        <div className="inputField">
                            <label >Name</label>
                            <input type="text" placeholder="name" />
                        </div>
                        <div className="inputField">
                            <label>Email</label>
                            <input type="text" placeholder="email" />
                        </div>
                    </div>

                    <div className="formGroup">
                        <div className="inputField">
                            <label>Address</label>
                            <input type="text"  placeholder="address" />
                        </div>
                        <div className="inputField">
                            <label>Tel. No</label>
                            <input type="text"  placeholder="Tel. No" />
                        </div>
                    </div>

                    <div className="formGroupSingle">
                        <div className="inputFieldRole">
                            <label>Role</label>
                            <input type="text" placeholder="role" />
                        </div>
                    </div>

                    <div className="formButton">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Adduser;





