import React from 'react'
import { InsertRowLeftOutlined, InsertRowRightOutlined, RadiusBottomleftOutlined, RadiusUpleftOutlined, RadiusBottomrightOutlined, RadiusUprightOutlined, InsertRowAboveOutlined, InsertRowBelowOutlined, PicCenterOutlined, PicRightOutlined, PicLeftOutlined, BorderOuterOutlined, BorderTopOutlined, BorderBottomOutlined, BorderLeftOutlined, BorderRightOutlined } from "@ant-design/icons";
import { Button, Popover } from 'antd';
import "./AddToolsTab.scss";

const AddToolsTab = () => {

    const content = (
        <div>
            <p>Hall</p>
            <p>Bed Room</p>
        </div>
    );
    const doorsContent = (
        <div className="door_opens">
            <div className="door">
                <RadiusBottomleftOutlined />
                <h6>D1</h6>
            </div>
            <div className="door">
                <RadiusUpleftOutlined />
                <h6>D2</h6>
            </div>
            <div className="door">
                <RadiusUpleftOutlined />
                <h6>D3</h6>
            </div>
            <div className="door">
                <RadiusUprightOutlined />
                <h6>D4</h6>
            </div>
        </div>
    );

    const windowsContent = (
        <div className="door_opens">
            <div className="door">
                <InsertRowLeftOutlined />
                <h6>W1</h6>
            </div>
            <div className="door">
                <InsertRowRightOutlined />
                <h6>W2</h6>
            </div>
            <div className="door">
                <InsertRowAboveOutlined />
                <h6>W3</h6>
            </div>
            <div className="door">
                <InsertRowBelowOutlined />
                <h6>W4</h6>
            </div>
        </div>
    )
    const cupboardsContent = (
        <div className="door_opens">
            <div className="door">
                <PicCenterOutlined />
                <h6>C1</h6>
            </div>
            <div className="door">
                <PicLeftOutlined />
                <h6>C2</h6>
            </div>
            <div className="door">
                <PicRightOutlined />
                <h6>C3</h6>
            </div>
            <div className="door">
                <BorderOuterOutlined />
                <h6>C4</h6>
            </div>
        </div>
    )

    const basinContent = (
        <div className="door_opens">
            <div className="door">
                <BorderBottomOutlined />
                <h6>C1</h6>
            </div>
            <div className="door">
                <BorderLeftOutlined />
                <h6>C2</h6>
            </div>
            <div className="door">
                <BorderRightOutlined />
                <h6>C3</h6>
            </div>
            <div className="door">
                <BorderTopOutlined />
                <h6>C4</h6>
            </div>
        </div>
    )

    return (
        <div className='add_tools_tab'>
            <h3>
                Tools for the Internal Design of Plan for plot</h3>
            <div className="add_rooms">
                {/* <Popover content={content} title={false} trigger="click" placement="bottomLeft"> */}
                    <Button>Add Room</Button>
                {/* </Popover> */}
                <Popover content={doorsContent} title={false} trigger="click" placement="bottom">
                    <Button>Add Doors</Button>
                </Popover>
                <Popover content={windowsContent} title={false} trigger="click" placement="bottom">
                    <Button>Add Windows</Button>
                </Popover>
                <Popover content={cupboardsContent} title={false} trigger="click" placement="bottom">
                    <Button>Add Cupboards</Button>
                </Popover>
                <Popover content={basinContent} title={false} trigger="click" placement="bottom">
                    <Button>Add Basins</Button>
                </Popover>
                <Button>Add Amenities</Button>
            </div>

        </div>
    )
}

export default AddToolsTab