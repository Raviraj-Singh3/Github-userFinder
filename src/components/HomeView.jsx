
export default function HomeView({avatar_url, url,name}) {
  return (
    <div>

        <div>
            <img src={avatar_url} alt="avatar_url" />
            <h1>
              {name}
            </h1>
                
        </div>

    </div>
  )
}
