import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  renderSushiObj() {
    return this.props.data.map(el => {return  <Sushi key={el.id} sushi={el} eat={this.props.eat} taken={this.props.eaten.includes(el)}/>})
  }
  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushiObj()}
          <MoreButton more={this.props.more}/>
        </div>
      </Fragment>
    )
  }
  
}

export default SushiContainer