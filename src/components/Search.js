import React, { useMemo, useState } from 'react'
import { Form, Input, Row, Col, Button, DatePicker } from 'antd'
import moment from 'moment';
// const mapStateToProps = ({ humanData }) => ({
//     ...humanData
// })
function Search(props) {
    const [form] = Form.useForm();
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [valueDate, setValueDate] = useState(true)
    const setFrom = () => {
        form.resetFields()
        setValueDate(false)
    }

    const formItemLayout = useMemo(
        () => ({
            labelCol: { span: 12 },
            wrapperCol: { span: 12 },
        }),
        []
    );
    const onFinish = async (values) => {

        props.searchItem(values)
    };
    const handleGetValue = (_, dates) => {
       console.log(dates, "DD/MM/YYYY");
    }
    return (
        <>
            <div className="wrap-human-component-search">
                <div className="wrap-human-component-img">
                    <img
                        alt="ss"
                        className="wrap-human-component-img"
                        src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/166605060_743486853011676_4597316735645409692_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=8VjAJHEt7KUAX-KuYOn&_nc_ht=scontent.fhan3-1.fna&oh=cc00d6094b34e3db4a0c4ab8d4d31ce0&oe=60BB9CCC"
                    />
                </div>
                <div className="wrap-human-component-form">
                    <Form
                        {...formItemLayout}
                        layout="vertical"
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <Row  className="wrap-human-component-flex-row" >
                            <Col span={12} >
                                <Form.Item

                                    name="name"
                                    label="Khối"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập khối!',
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    name="score"
                                    label="Bộ phận"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập bộ phận!',
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="startDate"
                                    label="Từ ngày"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập ngày!',
                                        }
                                    ]}
                                >
                                    <DatePicker
                                        className="wrap-human-date-picker"
                                        defaultValue={!valueDate ? null : moment(moment(), dateFormatList[0])}
                                        format={dateFormatList}
                                        onChange={handleGetValue}
                                    //   disabledDate={d => d && d < moment(Date.now())}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="endDate"
                                    label="Đến ngày"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập ngày!',
                                        }
                                    ]}
                                >
                                    <DatePicker
                                        className="wrap-human-date-picker"
                                        defaultValue={!valueDate ? null : moment(moment(), dateFormatList[0])}
                                        format={dateFormatList}
                                        onChange={handleGetValue}
                                    //   disabledDate={d => d && d < moment(Date.now())}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className="wrap-human-submit-search"  justify="center">
                            <Col span={5}>
                                <Button
                                    block
                                    className="wrap-human-submit-button"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Tìm kiếm
                      </Button>
                            </Col>
                            <Col span={5}>
                                <Button
                                    block
                                    className="wrap-human-submit-button"
                                    type="primary"
                                    onClick={setFrom}
                                >
                                    Đặt lại
                      </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>


    )
}

export default Search;
