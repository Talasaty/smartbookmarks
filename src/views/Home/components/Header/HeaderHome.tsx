import * as React from 'react'
import {
  HeaderHomeWrapper,
  SearchHomeContainer,
  ButtonSearchHome,
  IconSearchHome,
  IconSettingsHome,
  SettingsHomeContainer,
  ButtonSettingsHome,
} from './HeaderHome.styles'
import { InputFiled } from 'src/formiksComponents/InputFiled/InputField'
import { Formik, Form } from 'formik'
import Search from '$icons/search.svg'
import Settings from '$icons/settings.svg'

export class HeaderHome extends React.Component {
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
                />
                <ButtonSearchHome type="submit">
                  <IconSearchHome src={Search} />
                </ButtonSearchHome>
              </SearchHomeContainer>
              <SettingsHomeContainer>
                <ButtonSettingsHome>
                  <IconSettingsHome src={Settings} />
                </ButtonSettingsHome>
              </SettingsHomeContainer>
            </HeaderHomeWrapper>
          </Form>
        )}
      />
    )
  }
}
