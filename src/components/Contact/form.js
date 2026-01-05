import React from "react";
import { Button, Form, Input } from "antd";
import styles from "./form.module.css";

const App = () => {
  const onFinish = () => {
    alert("Your message has been recorded! 🚀");
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        label={<span className={styles.label}>Your Name</span>}
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="What's your good name?" className={styles.input} />
      </Form.Item>

      <Form.Item
        name="email"
        label={<span className={styles.label}>Your email</span>}
        rules={[
          { type: "email", message: "Invalid E-mail!" },
          { required: true, message: "Please input your E-mail!" },
        ]}
      >
        <Input
          placeholder="What's your web address?"
          className={styles.input}
        />
      </Form.Item>

      <Form.Item
        name="introduction"
        label={<span className={styles.label}>Your Message</span>}
      >
        <Input.TextArea
          rows={5}
          placeholder="Wanna say something?"
          className={styles.input}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.submit}>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
