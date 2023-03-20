// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails

  return (
    <div className="latest-match-section">
      <h1>Latest Match</h1>
      <div className="latest-match-container">
        <div className="latest-match-card">
          <div className="match-details">
            <h1 className="latest-competing-team">{competingTeam}</h1>
            <p className="latest-match-details">{date}</p>
            <p className="latest-match-details">{venue}</p>
            <p className="latest-match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="competing-team-logo"
          />
        </div>
        <hr className="break-line" />
        <div className="match-details">
          <div>
            <p className="match-category-heading">First Innings</p>
            <p className="match-category-result">{firstInnings}</p>
          </div>
          <div>
            <p className="match-category-heading">Second Innings</p>
            <p className="match-category-result">{secondInnings}</p>
          </div>
          <div>
            <p className="match-category-heading">Man Of The Match</p>
            <p className="match-category-result">{manOfTheMatch}</p>
          </div>
          <div>
            <p className="match-category-heading">Umpires</p>
            <p className="match-category-result">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
