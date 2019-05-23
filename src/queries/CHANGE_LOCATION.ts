import gql from "graphql-tag";

export const CHANGE_LOCATION = gql`
  mutation changeLocation($to: String!) {
    changeLocation(to: $to) @client
  }
`
