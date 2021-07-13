import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations';


function ProfileSideBar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.user}.png`} style = {{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'chaaarlees5';
  const peopleFav = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev',
    'felipefialho',
    'gustavoguanabara',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profile' }}>
          <ProfileSideBar user={githubUser} />
        </div>
        
        <div className='welcomeArea' style={{ gridArea: 'welcome' }}>
          <Box>
            <h1>
              Bem Vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className='profileRelationsArea' style={{ gridArea: 'comunity' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Pessoas da comunidade ({peopleFav.length})
            </h2>

            <ul>
              {peopleFav.map((itemAtual) => {
                return (
                  <li>
                    <a href={`https://github.com/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                  
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
  </>
  )
}
