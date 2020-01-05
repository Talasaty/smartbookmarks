import * as React from 'react'
import {
  HeaderHomeWrapper,
  SearchHomeContainer,
  ButtonSearchHome,
  IconSearchHome,
  IconSettingsHome,
  SettingsHomeContainer,
  ButtonsOnlyMobile,
} from './HeaderHome.styles'
import { InputFiled } from 'src/formiksComponents/InputFiled/InputField'
import { Formik, Form } from 'formik'
import Search from '$icons/search.svg'
import Settings from '$icons/settings.svg'
import { Button } from '$components/Button'
import { Text } from '$components/Text'

interface Props {
  handleCategories: () => void
  handleSessions: () => void
}

export class HeaderHome extends React.Component<Props> {
  render() {
    return (
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
          // TODO eliminar cuando se ponga la logica
          setTimeout(() => {
            console.log(values.search)
            actions.setSubmitting(false)
          }, 1000)
        }}
        render={() => (
          <Form>
            <HeaderHomeWrapper>
              <SettingsHomeContainer>
                <ButtonsOnlyMobile>
                  <Button
                    typeButton="tiny"
                    backgroundColor="transparent"
                    borderColor="transparent"
                    onClick={() => {
                      this.props.handleCategories()
                    }}
                  >
                    <Text
                      typeText="span"
                      color="white"
                      size="h4"
                      center="center"
                    >
                      Categorias
                    </Text>
                  </Button>
                  <Button
                    typeButton="tiny"
                    backgroundColor="transparent"
                    borderColor="transparent"
                    onClick={() => this.props.handleSessions()}
                  >
                    <Text
                      typeText="span"
                      color="white"
                      size="h4"
                      center="center"
                    >
                      Sesiones
                    </Text>
                  </Button>
                </ButtonsOnlyMobile>
                <Button
                  typeButton="tiny"
                  backgroundColor="transparent"
                  borderColor="transparent"
                  onClick={() => {
                    console.log('click on settings')
                  }}
                >
                  <IconSettingsHome src={Settings} />
                </Button>
              </SettingsHomeContainer>
              <SearchHomeContainer>
                <InputFiled
                  name="search"
                  backgroundColor="transparent"
                  fontSize="h3"
                  paddingLeft="small"
                  paddingRight="tiny"
                  type="text"
                  placeholder="Busca algo"
                  color="white"
                  placeHolderColor="darkGray"
                />
                <ButtonSearchHome type="submit">
                  <IconSearchHome src={Search} />
                </ButtonSearchHome>
              </SearchHomeContainer>
            </HeaderHomeWrapper>
          </Form>
        )}
      />
    )
  }
}
