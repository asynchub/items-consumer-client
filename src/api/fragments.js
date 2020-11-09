import gql from 'graphql-tag'

export const FRAGMENT_ItemFields = gql`
  fragment ItemFields on Item {
    id
    dateCreatedAt
    modelNumber
    serialNumber
    dateWarrantyBegins
    dateWarrantyExpires
  }
`