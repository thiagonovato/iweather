import { View } from 'react-native';

import sun from '@assets/sun.svg';
import rain from '@assets/rain.svg';
import wind from '@assets/wind.svg';
import drop from '@assets/drop.svg';
import thermometer from '@assets/thermometer.svg';

import { WeatherItem } from '@components/WeatherItem';

import { styles } from './styles';

export interface WeatherDetailsProps {
  temp_kf: string;
  humidity: string;
  feels_like: string;
  wind_speed: string;
  probability: string;
}

interface Props {
  data: WeatherDetailsProps;
}

export function WeatherDetails({ data }: Props) {
  return (
    <View style={styles.container}>
      <WeatherItem
        icon={thermometer}
        title='Feels like'
        value={data.feels_like}
      />

      <WeatherItem icon={rain} title='Probability' value={data.probability} />

      <WeatherItem icon={wind} title='Wind speed' value={data.wind_speed} />

      <WeatherItem icon={drop} title='Humity' value={data.humidity} />

      <WeatherItem icon={sun} title='UV Index' value={data.temp_kf} isLast />
    </View>
  );
}
