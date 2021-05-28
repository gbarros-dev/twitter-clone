import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles'

import Feed from '../Feed'

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Guilherme Barros</h1>
        <h2>@guilherme_bbarros</h2>

        <p>
          Developer at <a href='https://rocketseat.com.br'>@Rocketseat</a>{' '}
        </p>

        <ul>
          <li>
            <LocationIcon />
            Goiânia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 10 de outubro de 1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage
