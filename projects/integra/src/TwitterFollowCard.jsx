// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ userName, name }) {
  return (
    <div>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${userName}`}
            alt="midudev"
          />
          <div>
            <strong className="tw-followCard-info">{name}</strong>
            <span className="tw-followCard-infoUserName">@{userName}</span>
          </div>
        </header>
        <aside>
          <button className="tw-followCard-button">seguir</button>
        </aside>
      </article>
    </div>
  );
}
