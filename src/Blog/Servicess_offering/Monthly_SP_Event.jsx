import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import EventIcon from '@mui/icons-material/Event'; // Example icon for date
import { NavLink } from 'react-router-dom';

// Array of event objects
const events = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC89_oC-dBXoGkWiKJ8GrYIOW5FYqq5Scl-g&s',  // Replace with actual image URL
    // date: '1 october, 2024',
    title: 'Gloum Astro Month Sale',
    description: 'Deep Discounts On Our Specialized Life-changing Service Participate in our Gloum astro Month Sale for New Beginnings and avail exclusive offers on specially curated Vedic Services to invoke the transformational blessings of Divine Archetypes. You can choose from a wide collection of unique services for targeted, practical results in critical areas of your life- financial growth and wealth protection, harmonious and fulfilling relationships, ongoing success in new endeavors, and overall abundance and progress in life.',
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/astro-month-sale',
  },
  {
    id: 2,
    image: 'https://www.astroved.com/us/wp-content/uploads/2017/08/Vamana-Jayanthi-fdsk.jpg',  // Replace with actual image URL
    // date: 'September 15, 2024 at 5:00 AM IST',
    title: 'Vamana Jayanthi: Day of Abundance & Wealth',
    description: "Vamana Jayanthi: Day of Abundance & WealthGrand Invocation of Vishnu’s Vamana Avatar For 8 Types of Wealth BlessingsVamana Jayanthi (Onam) is the birthday powertime of Vamana, Vishnu’s Dwarf Avatar and Bestower of Fortune, Fame, and Status, when his wealth and abundance bestowing energy is available in plenty on the earthplane. To help you invoke Vamana’s abundance-bestowing energy, Gloum astro will perform 22 Grand Ceremonies following a century-old Kerala tradition to grant prosperity, abundance, wealth accumulation, positivity, and Divine guidance to follow the right path to achieve your goals and bestow eight types of wealth blessings.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 3,
    image: 'https://www.astroved.com/us/wp-content/uploads/2022/05/Debt-Clerance-Monday-fdsk.jpg',  // Replace with actual image URL
    // date: 'September 16, 2024',
    title: 'Shiva’s Debt Clearance Super 11 Mondays',
    description: "2000-Year-Old Shiva Powerspot Removes Debt & Bestows Prosperity Shiva, as Runa Vimochana Lingeshwarar, the Supreme Debt-Remover, manifested in Lingam form at a 2000-Year-Old sacred energy vortex, where Shiva’s debt-clearance energy is available in abundance. Runa means ‘Debt,’ and Vimochana means ‘Relief.’ Hence, invoking Shiva here on 11 consecutive auspicious Mondays, through Special Fire Labs and Poojas, can help resolve karmic and financial debts, scarcity and past sins, overcome obstacles to financial growth, and attract wealth, fame, fortune, and material riches.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 4,
    image: 'https://www.astroved.com/us/wp-content/uploads/2024/09/Thiruvanamalai-fdsk.jpg',  // Replace with actual image URL
    // date: 'September 17, 2024 at 6:00 PM IST',
    title: 'Thiruvannamalai Arunachaleshwara Homa',
    description: "Thiruvannamalai Arunachaleshwara Homa Invoke the Purifying Grace of Lord Arunchaleshwara as Agni Jyothirlingam on Pournami Day At the sacred abode of Arunachala Hill (at Thiruvannamalai in South India), Lord Shiva is venerated as Arunachaleshwara, Lord of the Mountain of Light. He is sought after by humans, Devas, and Rishis for his infinite wisdom, compassion, guidance, and providence. He reigns here as the Master of the Universe, the Ultimate Remover of Afflictions and Suffering, and the Supreme Gateway to Salvation. Gloum astro will invoke Shiva as Arunachaleshwara on Pournami (Full Moon), with 17 Grand Ceremonies to help you receive his boundless grace and Divine blessings to uproot any form of negativity in your life, awaken your true potential, alleviate sorrow and suffering, and help you manifest your spiritual and material goals.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 5,
    image: 'https://www.astroved.com/us/wp-content/uploads/2021/09/Mahalaya-Paksha-fdsk.jpg',  // Replace with actual image URL
    // date: 'September 18, 2024',
    title: 'Mahalaya Paksha (Critical Fortnight of Tarpanam for Your Ancestors)',
    description: "15 Days Ancestral Powertime to Dissolve Afflictions, Sins, Karma & Gain Potent Blessings to Change Your Destiny & Safeguard Future GenerationsMahalaya Paksha (Dark Fortnight in Tamil Month of Purattasi), also known as Pitru Paksha, is the most critical time in the year to revere your Pitru (Ancestors) with Tarpanam (Ancestral Ritual With Sacred Offerings). Every year during the 15-Day Mahalaya period, the spirits of your ancestors come to the earthplane to receive your offerings through Tarpanam and bestow their abundant blessings for life success and dissolve karma, sins, and afflictions impeding your health, wealth, career/business, family, and relationship",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 6,
    image: 'https://www.astroved.com/us/wp-content/uploads/2022/05/Lunar-Eclipse-fdsk-new.jpg',  // Replace with actual image URL
    // date: 'September 18, 2024 at 10:30 AM IST',
    title: 'Rare Lunar Eclipse On 1st Moon Of Mahalaya Fortnight',
    description: "Ideal Time to Pacify Ancestors, Resolve Karmic Debts & Attain Ancestral Blessings The upcoming Lunar Eclipse on Sep. 18, 2024 is a rare and powerful cosmic event coinciding with the 1st Moon of Mahalaya Paksha. This day, revered in Vedic tradition, marks the beginning of the 15-Day Ancestral Blessings Powertime, offering a unique opportunity to seek spiritual growth, ancestral blessings, and profound personal transformation. This particular eclipse is further intensified by a rare planetary alignment. The three power planets, Ketu, Sun, and Venus, will be positioned in Virgo, while the Moon and Rahu are directly opposite in Pisces. To fully embrace the Divine energy of this powerful day,Gloum astro will perform 15 Remedial Rituals to liberate your ancestors, alleviate negative energies and obstacles, and gain ancestral blessings for a happy and prosperous life.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 7,
    image: 'https://www.astroved.com/us/wp-content/uploads/2015/09/Vishnu-Saturday-fdsk.jpg',  // Replace with actual image URL
    // date: 'September 21, 2024',
    title: '4 Vishnu Power Saturdays For Material Abundance',
    description: "Invoke Vishnu as the Supreme Lord of Wealth, Venkateshwara For Wealth, Well-Being & AffluenceVishnu descended to the earthplane in the form of Venkateshwara (Balaji), Supreme Lord of Infinite Wealth, Ultimate Refuge, and Boon-Bestower of the Kali Yuga, during the Tamil month of Purattasi (Mid-Sep. to Mid-Oct.). During these four spectacular Saturdays in Purattasi month, Gloum astro  will perform a special suite of services to help you access the abundance-bestowing energy of Vishnu for desire fulfillment, material comforts, wisdom, financial prosperity, name, fame, position, and well-being.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 8,
    image: 'https://www.astroved.com/us/wp-content/uploads/2021/09/Navarathri-Banner-fdsk.jpg',  // Replace with actual image URL
    // date: 'October 3, 2024',
    title: 'Navaratri: Ultimate Nine Nights of Goddess Powertime',
    description: "160 Ceremonies to Invoke the Transcendent Blessings of 22 Supreme Goddesses To Destroy Negativity & Bestow Power, Prosperity, Protection & Progress in LifeNavaratri denotes the nine nights of the Goddess (Oct. 3 - Oct. 12) when she descends to the earthplane, and her all-powerful Divine feminine energy is abundantly available to annihilate dark and destructive energies. Gloum astro  will perform 160 Grand Navaratri Ceremonies to invoke 22 forms of Divine feminine energy with 13 Grand Fire Labs and supported by 147 Special Poojas for power, protection, prosperity, wisdom, success, and good fortune, and to overcome adversity, destroy financial distress, bestow resilience and determination to seize opportunities, enhance family and child welfare and relationship bliss, and lead a blissful life.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 9,
    image: 'https://www.astroved.com/us/wp-content/uploads/2023/11/Yearlong-Ganesha-fdsk.jpg',  // Replace with actual image URL
    // date: 'September 21, 2024 at 4:30 PM IST',
    title: 'Yearlong Ganesha Program',
    description: "Daily Invocation of Ultimate Obstacle-Remover Ganesha to Help Transform Your Life Gloum astro’s Yearlong Ganesha Program has been designed to invoke the superhuman powers of Ganesha, Lord of Fortune and Wisdom & Remover of Obstacles, through 2501 rituals performed throughout the year and on Ganesha’s auspicious powertime days- Chathurthi (4th Waxing and Waning Moon Phases) and Chaturdasi (14th Waxing and Waning Moon Phases) and receive his blessings to smash obstacles, karma, and afflictions, and gain success, prosperity, Divine wisdom, and new beginnings of all kinds.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 10,
    image: 'https://www.astroved.com/us/wp-content/uploads/2021/05/Arupadai-Veedu-fdsk-1.jpg',  // Replace with actual image URL
    // date: 'September 23, 2024 at 6:00 AM IST',
    title: '6-Month Arupadai Veedu Muruga Program (Six Battle Stations of Muruga)',
    description: "6-Month Arupadai Veedu Muruga Program (Six Battle Stations of Muruga)Connect With The 6-Faced Divine Warrior At His 6 Powerful Abodes During His Auspicious Karma-Clearing 6th Moon Powertime Days Gloum astro  has designed a Super Grand 6-Month Invocation of Arupadai Muruga to help you connect with the indomitable energy and matchless power of this Six-Faced Spiritual Warrior Muruga and his Cosmic Weapon, the Vel, at his Arupadai Veedu (Six Battle Stations on Earth) through powerful karma-removal rituals using proxy technology to destroy deep-seated karmic impressions, afflictions, and negativity affecting your wealth, health, relationships, career, and family well-being, unveil your true potential and purpose, and manifest money, new opportunities, success, and people in your life.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  // Add more event objects (up to 10 as you want)
];

function SpecialEvents() {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Title Section */}
      <Typography variant="h5" gutterBottom>
        Special Events
      </Typography>

      {/* Loop through the events array to display each event */}
      {events.map((event) => (
        <Grid container spacing={2} sx={{ marginBottom: '20px' }} key={event.id}>
          {/* Image Section */}
          <Grid item xs={12} sm={4}>
            <Card>
              <img
                src={event.image}
                alt={event.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Card>
          </Grid>
          {/* Content Section */}
          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
                <NavLink to={event.route} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color={event.buttonColor}>
                    {event.buttonText}
                  </Button>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default SpecialEvents;