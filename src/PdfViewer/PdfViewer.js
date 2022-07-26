/* eslint-disable prefer-object-spread */
import React, { useState } from "react";
import "./PdfViewer.scss";
// import Demo from "./Grid/Demo";
import Demo from "./Grid/Demo";
import {
  Input,
  Select,
  message,
  Button,
  Drawer,
  Divider,
  Spin,
  Tabs,
} from "antd";
import {
  SearchOutlined,
  ArrowRightOutlined,
  LoadingOutlined,
  DragOutlined,
} from "@ant-design/icons";

import FilterDetails from "./FilterDetails/FilterDetails";

import AddToolsTab from "./Grid/AddToolsTab/AddToolsTab";

const { Option } = Select;
const { TabPane } = Tabs;
const PdfViewer = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("top");
  const [planresinfo, setPlanresinfo] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [isdynamic, setIsdynamic] = useState(false);
  const [dynamiclayout, setDynamiclayout] = useState([
    { i: "Bath1", x: 1, y: 0, w: 5, h: 15, static: false },
    {
      i: "BedRoom1",
      x: 6,
      y: 0,
      w: 15,
      h: 15,
      static: false,
    },
    { i: "LivingRoom1", x: 21, y: 0, w: 15, h: 15, static: false },

    { i: "Carparking", x: 36, y: 0, w: 12, h: 15, static: false },
    { i: "Dinning", x: 19, y: 2, w: 12, h: 12, static: false },
    { i: "Kitchen", x: 31, y: 2, w: 12, h: 12, static: false },
    { i: "Bath2", x: 1, y: 2, w: 5, h: 12, static: false },
    { i: "BedRoom2", x: 6, y: 2, w: 13, h: 12, static: false },
  ]);
  const [searchfilterData, setSearchfilterData] = useState([]);
  const [Searchfilter, setSearchfilter] = useState({
    lat: "",
    long: "",
    facing: undefined,
    length: "",
    breadth: "",
  });
  const { lat, length, breadth, facing } = Searchfilter;
 
  

  const onClose = () => {
    setVisible(false);
  };

  function selectProps(...props) {
    return function (obj) {
      const newObj = {};
      props.forEach((name) => {
        newObj[name] = obj[name];
      });

      return newObj;
    };
  }

  const handleXaxis = (i) => {
    if (i === 0 || i === 1) {
      return 1;
    } else if (i === 2 || i === 3) {
      return 3;
    } else if (i === 4) {
      return 6;
    } else {
      return 5;
    }
  };
  const handleYaxis = (i) => {
    if (i === 0 || i === 1) {
      return 1;
    } else if (i === 2 || i === 3) {
      return 3;
    } else if (i === 4) {
      return 6;
    } else if (i === 5) {
      return 0;
    }
  };
  const validateTheValue = (args) => {
    const keys = Object.keys(args);
    const values = Object.values(args);
    const Index = values.findIndex((val) => val === "" || val === undefined);
    if (Index === -1) return undefined;
    return keys[Index];
  };
  const handleSerarch = async () => {
    const res = validateTheValue({
      location: lat,
      facing,
      length,
      breadth,
    });
    let layout = [];
    if (!res) {
      setLoaded(true);
      const results = await common.propertyFilters(Searchfilter);

      if (results.status === 200) {
        setSearchfilterData(results.data.data);
        setLoaded(false);
        const newEpisodes = results.data.data.map(
          selectProps(
            "bedrooms",
            "livingRoom",
            "carparking",
            "setback",
            "dinning",
            "kitchen"
          )
        );
        for (const iterator of newEpisodes) {
          const {
            bedrooms,
            kitchen,
            livingRoom,
            carparking,
            setback,
            dinning,
          } = iterator;
          layout = [
            ...kitchen,
            ...bedrooms,
            ...livingRoom,
            ...carparking,
            ...setback,
            ...dinning,
          ];
        }

        let dynamiclayout = layout.map((value, i) => ({
          i: value.title,
          w: Math.round(value.breadth / 8),
          h: Math.round(value.length / 7),
          x: handleXaxis(i),
          y: handleYaxis(i),
          isDraggable: undefined,
          isResizable: undefined,
          maxH: undefined,
          maxW: 2,
          minH: undefined,
          minW: undefined,
          moved: false,
          static: false,
        }));
        setDynamiclayout(dynamiclayout);
      } else {
        message.error("something went wrong please try again");
      }
    } else {
      message.error("please fill the " + res);
    }
  };
  const handleSelect = (e) => {
    setSearchfilter({
      ...Searchfilter,
      facing: e,
    });
  };
  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setSearchfilter({
      ...Searchfilter,
      [name]: value,
    });
  };

  const hanldeobjectform = (planresinfo, val) => {
    for (const key in planresinfo) {
      if (key.substring(0, 3) === val.substring(0, 3)) {
        const element = planresinfo[key];
        return element;
      }
    }
  };
  const handlecost = (resource, measurements, { incomemeasurements }) => {
    const costdata = resource?.reduce(function (accumulator, item) {
      if (item.resourceType === "Work") {
        return (
          accumulator +
          item.measurementsunits *
            incomemeasurements *
            item.duration *
            8 *
            item.cost
        );
      } else if (item.resourceType === "Material") {
        return (
          accumulator +
          item.measurementsunits * incomemeasurements * 1 * item.cost
        );
      }
    }, 0);
    const totalcost =
      costdata ??
      [].reduce(function (accumulator, item) {
        return accumulator + item;
      }, 0);

    return totalcost;
  };

  const handleSelectdata = (data) => {
    setPlanresinfo(data);
  };
  const res = validateTheValue({
    length,
    breadth,
  });
  const handleplanlockchange = async () => {
    const firstleveldata = [];
    if (!res) {
      dynamiclayout.unshift({
        i: "Structural",
        x: 1,
        y: 0,
        w: length,
        h: breadth,
        static: false,
      });
      let roomsarray = [];
      for (const iterator of dynamiclayout ?? []) {
        roomsarray.push({
          room: iterator.i,
          minsq: iterator.w * iterator.h,
        });
      }

      const results = await common.EsatimationFilters(dynamiclayout);
      setLoaded(true);
      if (results.status === 200) {
        // handleSelectdata(results.data)

        for (const iterator of roomsarray) {
          firstleveldata.push({
            active: iterator.room,
            minsq: iterator.minsq,
            cost: handlecost(
              hanldeobjectform(results.data, iterator.room)?.resources ?? [],
              hanldeobjectform(results.data, iterator.room)?.measurements,
              {
                incomemeasurements:
                  iterator?.minsq /
                  hanldeobjectform(results.data, iterator.room)?.minSqFeet,
              }
            ),
            duration: hanldeobjectform(results.data, iterator.room)
              ?.estimationDays,
            subactivity: [
              {
                ...hanldeobjectform(results.data, iterator.room),
                incomemeasurements:
                  iterator?.minsq /
                  hanldeobjectform(results.data, iterator.room)?.minSqFeet,
              },
            ],
          });
        }
        setLoaded(false);
        const newArr = dynamiclayout.map((object) => {
          // 👇️ change value of name property
          return { ...object, static: true };
        });
        const newdata = {
          dynamiclayout: newArr.slice(1),
          searchfilterData: [],
          dynamicdata: firstleveldata,
        }; 
      }
    } else {
      message.error("please provide a valid " + res);
    }
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  console.log("loaded", loaded);
  return (
    <div>
      <div className="PdfViewer_conatiner">
        <div className="searchbar_content">
          {/* <div className="searchbar">
            <div className="aaa">
              <GoogleAutoComplete
                placeholder={"Enter Location"}
                location={"location"}
                address={"address"}
                setSearchfilter={setSearchfilter}
              />
              <Divider type="vertical" />
            </div>
          
            </div>
            <div className="searchIcon" onClick={handleSerarch}>
              {loaded ? <Spin indicator={antIcon} /> : <SearchOutlined />}
            </div>
          </div> */}

          {/* <div className="filter_btn">
            <Button onClick={showDrawer}>Filter</Button>
          </div> */}

          <Tabs defaultActiveKey="1" style={{ margin: 0 }}>
            <TabPane tab="Plot Search" key="1">
              <div className="plot_size_details">
                <div className="final_searchBar">
                  <div className="property">
                    <Select
                      defaultValue="Property Facing"
                      value={facing}
                      style={{ width: 120 }}
                      onChange={handleSelect}
                    >
                      <Option value={"East"}>East</Option>
                      <Option value={"West"}>West</Option>
                      <Option value={"South"}>South</Option>
                      <Option value={"North"}>North</Option>
                    </Select>
                    <Divider type="vertical" />
                  </div>
                  <div className="property">
                    <Input
                      placeholder="Enter Length"
                      name="length"
                      value={length}
                      onChange={handleinputChange}
                    />
                    <Divider type="vertical" />
                  </div>
                  <div className="property">
                    <Input
                      placeholder="Enter Breadth"
                      name="breadth"
                      value={breadth}
                      onChange={handleinputChange}
                    />
                  </div>{" "}
                  <div className="searchIcon" onClick={handleSerarch}>
                    {loaded ? <Spin indicator={antIcon} /> : <SearchOutlined />}
                  </div>
                </div>

                <div className="middle">
                  <Button
                    className="btn"
                    onClick={handleplanlockchange}
                    loading={loaded}
                  >
                    <span className="wave"></span>
                    <span className="text">
                      Plan Lock <ArrowRightOutlined />
                    </span>
                  </Button>
                </div>

                <div className="loyout_directions">
                  <Demo
                    dynamiclayout={dynamiclayout}
                    setDynamiclayout={setDynamiclayout}
                    setIsdynamic={setIsdynamic}
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Tools" key="2">
              <div className="add_plots_tools">
                <AddToolsTab />
                <div className="loyout_directions">
                  <Demo
                    dynamiclayout={dynamiclayout}
                    setDynamiclayout={setDynamiclayout}
                    setIsdynamic={setIsdynamic}
                  />
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>

        <div
          style={{
            display: visible ? "block" : "none",
          }}
          className="site-drawer-render-in-current-wrapper"
        >
          <Drawer
            placement="top"
            closable={false}
            onClose={onClose}
            visible={visible}
            getContainer={false}
            style={{
              position: "absolute",
            }}
          >
            <FilterDetails onClose={onClose} />
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
