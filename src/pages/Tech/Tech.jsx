import styles from './Tech.module.css'

const Tech = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Technology</h1>

          <h2 className={styles.deviceName}>
            Computer (MacBook Air M1)
            {' '}
            <a
              href="https://github.com/tonylam0/dotfiles"
              target="_blank"
              rel="noopener noreferrer"
            ><span className={styles.dotLink}>→ see dotfiles</span></a>
          </h2>

          <ul className={styles.list}>
            <li className={styles.item}>Kitty</li>
            <li className={styles.item}>User-made terminal commands via .zshrc file</li>
            <li className={styles.item}>Yabai</li>
            <li className={styles.item}>RMPC</li>
            <li className={styles.item}>skhd</li>
            <li className={styles.item}>JankyBorders</li>
            <li className={styles.item}>Vimium C</li>
            <li className={styles.item}>Firefox</li>
            <li className={styles.item}>Shottr</li>
            <li className={styles.item}>Neovim</li>
            <li className={styles.item}>Notion</li>
            <li className={styles.item}>Obsidian</li>
            <li className={styles.item}>Cold Turkey Blocker</li>
            <li className={styles.item}>YPT</li>
            <li className={styles.item}>f.lux</li>
            <li className={styles.item}>Simple-bar via Übersicht</li>
            <li className={styles.item}>Alfred</li>
            <li className={styles.item}>Karabiner-Elements</li>
            <li className={styles.item}>Mac Mouse Fix 2.0</li>
            <li className={styles.item}>Skim</li>
            <li className={styles.item}>Yazi</li>
            <li className={styles.item}>btop</li>
          </ul>

          <h2 className={styles.deviceName}>Phone (iPhone 11)</h2>
          <ul className={styles.list}>
            <li className={styles.item}>No social media apps</li>
            <li className={styles.item}>Blocked social media websites via Screen Time</li>
            <li className={styles.item}>Uninstalled app store</li>
            <li className={styles.item}>Black & white filter via Zoom</li>
            <li className={styles.item}>Red screen color filter</li>
            <li className={styles.item}>Shortcuts animation to switch from black & white to red filter at wind down time</li>
            <li className={styles.item}>Musi</li>
            <li className={styles.item}>Obsidian sync via Git community plugin</li>
            <li className={styles.item}>iBooks</li>
            <li className={styles.item}>Notion</li>
            <li className={styles.item}>YPT</li>
          </ul>

          <h2 className={styles.deviceName}>Tablet (iPad Air Generation 4)</h2>
          <ul className={styles.list}>
            <li className={styles.item}>Concepts</li>
            <li className={styles.item}>iBooks</li>
            <li className={styles.item}>Noteful</li>
            <li className={styles.item}>Obsidian sync via Git community plugin</li>
            <li className={styles.item}>Notion</li>
            <li className={styles.item}>YPT</li>
          </ul>

          <h2 className={styles.deviceName}>E-reader (Kindle 11th Generation)</h2>
          <ul className={styles.list}>
            <li className={styles.item}>Jailbroken via WinterBreak</li>
            <li className={styles.item}>KindleForge</li>
            <li className={styles.item}>Koreader</li>
            <li className={styles.item}>Toggle Ads</li>
          </ul>


          <h2 className={styles.deviceName}>Accessories</h2>
          <ul className={styles.list}>
            <li className={styles.item}>AirPods Pro Generation 1</li>
            <li className={styles.item}>Sony XM4</li>
            <li className={styles.item}>Daylight Therapy Lamp</li>
          </ul>

        </div>
      </div >
    </>
  )
}

export default Tech
