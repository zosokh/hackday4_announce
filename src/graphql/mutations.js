/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createHackday4 = /* GraphQL */ `
  mutation CreateHackday4(
    $input: CreateHackday4Input!
    $condition: ModelHackday4ConditionInput
  ) {
    createHackday4(input: $input, condition: $condition) {
      id
      slack_url
      slack_channel
      period_day
      createdAt
      updatedAt
    }
  }
`;
export const updateHackday4 = /* GraphQL */ `
  mutation UpdateHackday4(
    $input: UpdateHackday4Input!
    $condition: ModelHackday4ConditionInput
  ) {
    updateHackday4(input: $input, condition: $condition) {
      id
      slack_url
      slack_channel
      period_day
      createdAt
      updatedAt
    }
  }
`;
export const deleteHackday4 = /* GraphQL */ `
  mutation DeleteHackday4(
    $input: DeleteHackday4Input!
    $condition: ModelHackday4ConditionInput
  ) {
    deleteHackday4(input: $input, condition: $condition) {
      id
      slack_url
      slack_channel
      period_day
      createdAt
      updatedAt
    }
  }
`;
