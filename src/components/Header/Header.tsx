
import { useUserLogged } from "../../Context/UserProvider/useGetUser"
import styles from './Header.module.scss'

const Header = () => {
  const user = useUserLogged();
  const userName = user.name
  const userRole = user.role
  return (
    <header className={styles['header-container']}>
      <img className={styles.logo} src="./logoMenorSmartManage.png" alt="Logo Smart Manage" />
      <div className={styles.userContainer}>
        <div className={styles.userInformation}>
          <p className={styles.nome}>{userName}</p>
          <p className={styles.role}>{userRole}</p>
        </div>
        <img src="./userIcon.png" alt="Icone de usuário"/>
      </div>
    </header>
  )
}
export default Header
