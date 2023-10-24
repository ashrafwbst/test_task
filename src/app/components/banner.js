import Image from 'next/image'

export default function Banner({url,width,height}) {
    return (
        <Image
        src={url}
        alt="banner"
        width={width}
        height={height}
        priority
      />        
    )
  }
  