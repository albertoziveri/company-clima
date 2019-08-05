import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';
import { VictoryLabel } from 'victory';
import { VictoryAnimation } from 'victory';


class ProgressBar extends React.Component {
    constructor() {
        super();
        this.state = {
          percent: 69, data: this.getData(0)
        };
      }
    
      componentDidMount() {
        let percent = 69;
        this.setStateInterval = window.setInterval(() => {
          percent += (Math.random() * 25);
          percent = (percent > 82) ? 69 : percent;
          this.setState({
            percent, data: this.getData(percent)
          });
        }, 2000);
      }
    
      componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
      }
    
      getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
      }
    
      render() {
        return (
          <div>
            <svg viewBox="0 0 200 200" width="100%" height="400px">
              <VictoryPie
                standalone={false}
                animate={{ duration: 1000 }}
                width={200} height={200}
                data={this.state.data}
                innerRadius={60}
                cornerRadius={25}
                labels={() => null}
                style={{
                  data: { fill: (d) => {
                    const color = d.y > 30 ? "red" : "green";
                    return d.x === 1 ? color : "transparent";
                  }
                  }
                }}
              />
              <VictoryAnimation duration={1000} data={this.state}>
                {(newProps) => {
                  return (
                    <VictoryLabel
                      textAnchor="middle" verticalAnchor="middle"
                      x={100} y={100}
                      text={`${Math.round(newProps.percent)}%`}
                      style={{ fontSize: 20, fill:'#fff' }}
                    />
                  );
                }}
              </VictoryAnimation>
            </svg>
          </div>
        );
      }
  }




export default ProgressBar