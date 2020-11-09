import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import Container from 'react-bootstrap/Container';
import { ImSpinner2 } from 'react-icons/im';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import LoadingButton from './LoadingButton';
import ItemInfo from './ItemInfo';
import { QUERY_getItemBySerialNumber } from '../api/queries';
import './SearchBar.css';

function SearchBar() {
  const [serialNumber, setSerialNumber] = useState('');
  const [getItemBySerialNumber, { loading, data, error }] = useLazyQuery(QUERY_getItemBySerialNumber, {
    fetchPolicy: 'network-only'
  });

  const item = data && data.getItemBySerialNumber;

  return(
    <Container
      className='SearchBar'
    >
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>
                Item serial number
              </Form.Label>
              <Form.Control
                type='text'
                placeholder={'Serial number'}
                value={serialNumber}
                onChange={(event) => setSerialNumber(event.target.value)}
              />
            </Form.Group>
            <LoadingButton
              block
              variant='outline-primary'
              disabled={loading}
              type='submit'
              isLoading={loading}
              onClick={() => getItemBySerialNumber({
                variables: { serialNumber: serialNumber }
              })}
            >
              Search
            </LoadingButton>
          </Form>
        </Col>
      </Row>
      <Row>
        {(loading && !error) &&
          <div
            className='Loading'
          >
            <ImSpinner2
              className='spinning'
            />
          </div>
        }
        {item &&
          <ItemInfo
            item={item}
          />
        }
        {/* {!item &&
          <div>
            No item found with this serial number.
          </div>
        } */}
      </Row>
    </Container>
  )
}

export default SearchBar;