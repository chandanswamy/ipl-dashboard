// Write your code here
const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <div>
      <img src={competingTeamLogo} alt={competingTeam} />
      <p>{competingTeam}</p>
      <p>{matchStatus}</p>
      <p>{result}</p>
    </div>
  )
}

export default MatchCard
