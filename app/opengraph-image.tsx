import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = { width: 900, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
    // Load the custom font data
    const fontData = await readFile(join(process.cwd(), 'app/fonts/Fraunces_72pt-Regular.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 40,
          background: '#0a0a0a',
          color: 'white',
          fontFamily: 'Fraunces',
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="https://katrine-ren.dev/profile.png"
            alt="Katrine Ren's profile picture"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              marginRight: 28,
              marginTop: 0,
              marginBottom: 8,
            }}
          />
          Katrine Ren
        </div>
        <div style={{ fontSize: 36, color: '#999', marginTop: 16 }}>
          Senior Frontend developer | Shopify & Contentful | Fashion Retail & Ecommerce · Melbourne
        </div>
        <div style={{ display: 'flex', alignItems: 'center',fontSize: 30, color: '#999', marginTop: 16, borderBottom: '2px solid #999',paddingBottom: '6px' }}>
          <div>Ask me about my&nbsp;</div>
          <div style={{ textDecoration: 'line-through' }}>jobs</div>
          <div>&nbsp;cat.</div>
        </div>
      </div>
    ),
    // 2nd argument is the config object where we can specify the size and fonts
    { ...size,
        fonts: [
            {
                name: 'Fraunces',
                data: fontData,
                style: 'normal',
                weight: 300
            }
        ]
    },
  )
}