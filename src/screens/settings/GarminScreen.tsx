import React, { FC, useEffect } from 'react'
import { RouteProp } from '@react-navigation/native'
import ROUTE from '@config/routes/Routes'
import { useAppDispatch } from '@hooks/redux'
import { RootStackParamList } from '@typings/navigation/navigation'
import { StackNavigationProp } from '@react-navigation/stack'

type GarminScreenProp = StackNavigationProp<
  RootStackParamList['App']['Settings'],
  ROUTE.CLOUD_SETTINGS
>

type GarminScreenRouteProp = RouteProp<
  RootStackParamList['App']['Settings'],
  ROUTE.GARMIN
>

type Props = {
  navigation: GarminScreenProp
  route: GarminScreenRouteProp
}

const GarminScreen: FC<Props> = ({
  navigation,
  route: {
    params: { oauth_token, oauth_verifier }
  }
}) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(getGarminAccessTokenAndroid(oauth_token, oauth_verifier)) FIXME
    navigation.navigate(ROUTE.SOURCE_SETTINGS)
  }, [dispatch, navigation, oauth_token, oauth_verifier])

  return <></>
}

export default GarminScreen
