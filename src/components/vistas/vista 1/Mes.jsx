import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Mes extends Component {
  render() {
    return(
      <div className="Mes">
        <Grid>
          <div className="Container">
            <Row className="show-grid">
              <Col xs={12} md={12}>            
                <h3>Mayo 2017</h3>      
              </Col>
            </Row>
          </div>
        </Grid>
      </div>    
    )
  }
}

export default Mes;