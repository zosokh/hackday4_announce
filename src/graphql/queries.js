/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHackday4 = /* GraphQL */ `
  query GetHackday4($id: ID!) {
    getHackday4(id: $id) {
      id
      slack_url
      slack_channel
      period_day
      createdAt
      updatedAt
    }
  }
`;
export const listHackday4s = /* GraphQL */ `
  query ListHackday4s(
    $filter: ModelHackday4FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHackday4s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slack_url
        slack_channel
        period_day
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
