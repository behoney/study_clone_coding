import React, { useRef } from 'react'
import styles from "./Signin.module.scss"
import { Button, Row, Col, Input } from 'antd'

function Signin() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // const emailRef = useRef<Input>(null);
    // const passwordRef = useRef<Input>(null);

    function click() {
        const vals = [emailRef.current, passwordRef.current]
        console.log(vals);
    }

    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={24}></Col>
                    <Col span={24}>
                        <div>My books</div>
                        <div>Please Note Your Opinion</div>
                        <div></div>
                        <div>Email
                            <span className={styles.required}> *</span>
                        </div>
                        <div>
                            <Input ref={emailRef} placeholder="Email" autoComplete="email" name="email"></Input>
                        </div>
                    </Col>
                </Row>

                <Row>

                    <Col span={24}>
                        <div>Password
                            <span className={styles.required}> *</span>
                        </div>
                        <div>
                            <Input ref={passwordRef} type="password" placeholder="password" autoComplete="password" name="password"></Input>
                        </div>
                    </Col>
                </Row>

                <Button onClick={() => click()}>Signin</Button>
            </Col>
        </Row>
    )
}

export default Signin