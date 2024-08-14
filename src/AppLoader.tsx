import { useAuth } from "./UseAuth"

const AppLoadingRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoadingRoute } = useAuth()

  if (isLoadingRoute) {
    console.log('IsLoadingRoute: AppLoader')
    return (
      <div className="loading-content route">
        <div className="loading">
          <span>Cargando...</span>
          <div className="loading-animation"></div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default AppLoadingRoute
