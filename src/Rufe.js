export default class RenderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      propsData: {},
    };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  render() {
    const data = this.state.data;
    return (
      <div className="grid chrPad-left-right chrGutter-horizontal--xs">
        {data.length && (
          <GridLayout
            className="layout"
            useCSSTransforms={false}
            cols={12}
            layout={this.props.layout}
            onLayoutChange={this.onLayoutChange}
            rowHeight={30}
            width={1405}
            style={{ zIndex: "0" }}
          >
            {data.map((element, index) => {
              return (
                <div
                  style={{ zIndex: "-1" }}
                  key={index}
                  className="content-border"
                >
                  {element.displayType === "MAP" && (
                    <MapContainer element={element} />
                  )}
                  {element.displayType === "CHART" && (
                    <ChartContainer
                      /*dimension={elementHeight}*/ element={element}
                    />
                  )}
                  {element.displayType === "STATS" && (
                    <StatsContainer
                      element={element}
                      id={index} /*dimension={elementHeight}*/
                    />
                  )}
                  {element.displayType === "TABLE" && (
                    <DataTableHandler data={element} />
                  )}
                </div>
              );
            })}
          </GridLayout>
        )}
      </div>
    );
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.data);

    this.setState({
      data: nextProps.data,
      propsData: nextProps.propsToPass,
    });
  }
}
