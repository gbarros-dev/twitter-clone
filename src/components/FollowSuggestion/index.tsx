import { Container, Avatar, Info, FollowButton } from './styles'

type FollowSuggestionProps = {
  name: string
  nickname: string
}

const FollowSuggestion = ({ name, nickname }: FollowSuggestionProps) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  )
}

export default FollowSuggestion
