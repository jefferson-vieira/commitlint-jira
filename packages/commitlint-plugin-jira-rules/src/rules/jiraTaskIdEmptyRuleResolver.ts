import {
  parseCommitMessage,
  commitlintJiraConstants,
} from 'commitlint-jira-utils'
import { TRuleResolver } from '../../@types'

const jiraTaskIdEmptyRuleResolver: TRuleResolver = (
  parsed,
  _when,
  commitMessageSeparator = commitlintJiraConstants.COMMIT_MESSAGE_SEPARATOR
) => {
  const rawCommitMessage = parsed.raw
  if (!rawCommitMessage) return [false, 'Commit message should not be empty']

  const commitMessage = parseCommitMessage(rawCommitMessage)

  const isRuleValid = commitMessage.commitTaskIds.length > 0
  return [
    isRuleValid,
    `the commit message must provide minimum one task id followed by (${commitMessageSeparator}) symbol, if task not have an id use a conventional task id e.g: "IB-0000${commitMessageSeparator} My commit message"`,
  ]
}
export default jiraTaskIdEmptyRuleResolver
