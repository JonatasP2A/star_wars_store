import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface ColorProps {
  color: string;
}

function SvgComponent({ color }: ColorProps, props: SvgProps) {
  return (
    <Svg width={156} height={16} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.78 15.98L39.991 0h7.874l5.302 15.98h-5.996l-.997-2.879h-4.71l-1.001 2.88h-5.685zm9.166-12.44L41.67 9.87h4.37l-2.095-6.33zm57.527 12.447l5.213-15.98h7.872l5.304 15.98h-5.997l-.995-2.88h-4.712l-1 2.88h-5.685zm9.166-12.441l-2.274 6.332h4.37l-2.096-6.332zM54.538 15.98V0h11.334c1.28 0 2.321.456 3.14 1.016.818.558 1.52 1.279 1.8 2.26.397 1.39.309 2.508.045 3.275a4.114 4.114 0 01-1.383 1.926c-.657.516-1.205.922-2.434 1.217.474.482.47.501 1.03.897.762.54 1.465.616 4.072.627l4.483.002v4.76l-4.514.012c-4.913.012-6.642-.026-7.583-.87-1.184-1.062-2.47-2.306-4.26-4.42v5.278h-5.73zm5.73-11.998v2.947h3.994c.213 0 .447-.08.694-.238.247-.159.382-.56.397-1.202-.037-.612-.187-1.016-.445-1.212-.26-.196-.48-.295-.653-.295h-3.987zM155.931.007h-11.694c-2.019 0-3.221.986-3.602 2.965-.379 1.975.705 4.144 3.254 6.505 1.544 1.229 1.276 1.81-.793 1.75h-2.719v-.008l-1.441-.001c-2.608-.011-3.311-.087-4.072-.627-.56-.397-.557-.415-1.03-.897 1.229-.295 1.777-.701 2.434-1.217a4.097 4.097 0 001.383-1.926c.263-.767.352-1.885-.046-3.276-.28-.98-.981-1.7-1.797-2.259-.82-.56-1.861-1.016-3.141-1.016h-11.334v15.98h5.73v-5.278c1.788 2.114 3.075 3.358 4.259 4.42.94.844 2.67.908 7.584.87l.852-.007v.002h8.432c2.281-.386 3.448-1.565 3.493-3.544.041-1.976-1.101-4.036-3.493-6.108-1.306-1.131-1.046-1.572.835-1.572h6.906V.007zm-28.868 3.975v2.947h3.994c.215 0 .446-.08.693-.238.248-.159.383-.56.398-1.202-.038-.612-.188-1.016-.446-1.212-.259-.196-.478-.295-.651-.295h-3.988zM12.678 0c-2.02 0-3.22.986-3.601 2.965-.38 1.976.642 4.216 3.252 6.505 1.483 1.301 1.277 1.75-.79 1.75H.088v4.76H16.63c2.314 0 3.45-1.565 3.493-3.543.042-1.976-1.12-4.012-3.493-6.109-1.326-1.107-1.045-1.628.835-1.57h7.1V15.98h5.155V4.756h7.2V0H12.677zm75.62 0L86.88 4.748 85.307 0h-5.914l5.212 15.98h5.108l1.749-5.339 1.747 5.34h5.108L103.529 0h-5.914l-1.573 4.748L94.623 0h-6.324z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
