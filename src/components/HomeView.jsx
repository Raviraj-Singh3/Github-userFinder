
export default function HomeView({avatar_url, url}) {
  return (
    <div>

        <div>
            <img src={avatar_url} alt="avatar_url" />
                {url}
                
            
        </div>

    </div>
  )
}
