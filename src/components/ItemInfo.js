import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FcApproval } from 'react-icons/fc';
import { MdError } from 'react-icons/md';
import './ItemInfo.css'

function ItemInfo({ item={} }) {
  // console.log(data);
  const dateWarrantyBeginsFormatted = new Date(item.dateWarrantyBegins).toLocaleDateString('de-DE')
  const dateWarrantyExpiresFormatted = item.dateWarrantyExpires !== '' ? new Date(item.dateWarrantyExpires).toLocaleDateString('de-DE') : 'Lifetime'
  const isWarrantyValid = item.dateWarrantyExpires ? new Date().valueOf() <= new Date(item.dateWarrantyExpires).valueOf() : true;
  return(
    <div
      className='ItemInfo'
    >
      <Container
        // fluid
      >
        <Row>
          <Col>
            <div
              className='justify-content-md-center SerialInfo'
            >
              {`SN ${item.serialNumber}`}
            </div>
            <hr/>
            <div
              className='justify-content-md-center WarrantyInfo'
            >
              {isWarrantyValid ?
                `Warranty: ${dateWarrantyBeginsFormatted} - ${dateWarrantyExpiresFormatted}`
                :
                `Warranty expired ${dateWarrantyExpiresFormatted}`
              }
              {isWarrantyValid &&
                <FcApproval />
              }
              {!isWarrantyValid &&
                <MdError
                  color={'red'}
                />
              }
            </div>
            <hr/>
            <div
              className='justify-content-md-center ModelInfo'
            >
              {item.modelNumber}
            </div>
            <div
              className='justify-content-md-center'
            >
              <a target='_blank' rel='noopener noreferrer' href='https://www.lg.com/global/business/monitors/lg-34bn770'>
                Manufacturer info
              </a>
            </div>
          </Col>
          <Col lg='7'>
            <Image
              className='justify-content-md-center'
              fluid
              src='https://www.lg.com/global/images/business/md07516653/gallery/desktop-03.jpg'
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ItemInfo