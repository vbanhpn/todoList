import { Form, Input, Button, Checkbox, Modal } from "antd";
import { HOME } from "./pageType";
import { useHistory } from "react-router-dom";
import { React, useState } from "react";
import { ListUsers } from "./ListUsers";
import { connect } from "react-redux";
import { userLoginSuccess } from "../redux/actionCreators";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const header = {
  style: {
    color: "red",
    textAlign: "center",
  },
};

export function Login({userLoginSuccess}) {
  let [currentEmail, setCurrentEmail] = useState("");
  let [currentPassword, setCurrentPassword] = useState("");
  const getListUsers = ListUsers();
  const handleChangeEmail = (value) => {
    setCurrentEmail(value);
  };
  const handleChangePassword = (value) => {
    setCurrentPassword(value);
  };
  const userLogin = getListUsers.find(
    (user) => user.email === currentEmail && user.password === currentPassword
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  let history = useHistory();
  function isValid() {
    // console.log("getListUsers", getListUsers);
    // console.log("currentEmail", currentEmail);
    // console.log("currentPassword", currentPassword);
    // console.log("userLogin", userLogin);
    if (userLogin) {
      history.push("/home");
      console.log("userLogin", userLogin.name);
      userLoginSuccess(userLogin.name);
      // console.log("userLogin", userLogin.name);
    } else {
      showModal();
    }
  }
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1 {...header}> Login </h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            // initialValues="admin@gmail.com"
            onChange={(event) => handleChangeEmail(event.target.value)}
          ></Input>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(event) => handleChangePassword(event.target.value)}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          {
            <Button type="primary" htmlType="submit" onClick={() => isValid()}>
              Submit
            </Button>
          }
          <Modal
            title="Login"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>UserName or Password is incorrect</p>
          </Modal>
        </Form.Item>
      </Form>
    </div>
  );
}
// export default Header;
const mapStateToProps = (state) => {
  console.log("state :" + state.user);
  return { Name: state.user };
};
const mapDispatchToProps = {userLoginSuccess};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
