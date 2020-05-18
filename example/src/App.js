import React from 'react'

import { HoneycombChart } from 'honeycomb-chart'
import 'honeycomb-chart/dist/index.css'

class HoneycombChartExample extends React.Component {
  state = {
    option: {
      margin: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '5%'
      },
      honeycomb: {
        maxRadius: 100,
        minRadius: 10,
        distance: 0.06
      },
      groups: {
        honeycombNum: 10,
        lineGroupNum: 3,
        titleHeight: 20
      },
      series: [
        {
          name: 'count',
          data: [
            {
              name: 'Pass of.',
              value: 1,
              color: '#1C7BDC',
              line: [
                {
                  time: 1589791385130,
                  value: 0
                },
                {
                  time: 1589791474545,
                  value: 1
                }
              ]
            },
            {
              name: 'Whole.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Hope hand.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Knowledge.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Protect.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Education.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Sign.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Own buy.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Heavy.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Season.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Movie.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Goal.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Trial.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Present.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Debate.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Yet.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Pull high.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'He local.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Standard.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Letter.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Forward.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Later.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Happy.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Positive.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Example.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Business.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Also.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Build.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Three.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Civil.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Firm.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Team.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Culture.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Onto.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Continue.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Show rate.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Rule.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Check put.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Those.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Data.',
              value: 2,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Prepare.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Now.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Finish.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Meet find.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Ten.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'After for.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Special.',
              value: 2,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Sure skin.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Audience.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Price we.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Produce.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Both.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Step mind.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Other.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Middle.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Market.',
              value: 2,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Entire.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Fish.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Ago what.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Score.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Clear.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Me.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Relate.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Easy.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Small.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Various.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Since.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'History.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Which.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Including.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Type.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Foreign.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Condition.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'What.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'By range.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Nice.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Within.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Better.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Offer.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Project.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Artist.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'For.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Current.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Wife.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Direction.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Include.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'East.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Want.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Hotel.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Enough.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Clear the.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Receive.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Strong.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Cultural.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Clearly.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Make high.',
              value: 1,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Last he.',
              value: 1,
              color: '#1C7BDC',
              line: []
            }
          ]
        },
        {
          name: 'max(num)',
          data: [
            {
              name: 'Pass of.',
              value: 199,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Whole.',
              value: 377,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Hope hand.',
              value: 251,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Knowledge.',
              value: 558,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Protect.',
              value: 193,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Education.',
              value: 185,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Sign.',
              value: 389,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Own buy.',
              value: 450,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Heavy.',
              value: 564,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Season.',
              value: 752,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Movie.',
              value: 768,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Goal.',
              value: 141,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Trial.',
              value: 487,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Present.',
              value: 927,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Debate.',
              value: 150,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Yet.',
              value: 59,
              color: '#42526e',
              line: []
            },
            {
              name: 'Pull high.',
              value: 112,
              color: '#FF0077',
              line: []
            },
            {
              name: 'He local.',
              value: 529,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Standard.',
              value: 750,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Letter.',
              value: 643,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Forward.',
              value: 928,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Later.',
              value: 672,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Happy.',
              value: 310,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Positive.',
              value: 38,
              color: '#42526e',
              line: []
            },
            {
              name: 'Example.',
              value: 669,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Business.',
              value: 463,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Also.',
              value: 44,
              color: '#42526e',
              line: []
            },
            {
              name: 'Build.',
              value: 439,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Three.',
              value: 524,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Civil.',
              value: 380,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Firm.',
              value: 672,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Team.',
              value: 656,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Culture.',
              value: 546,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Onto.',
              value: 356,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Continue.',
              value: 648,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Show rate.',
              value: 364,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Rule.',
              value: 991,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Check put.',
              value: 617,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Those.',
              value: 227,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Data.',
              value: 19,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Prepare.',
              value: 403,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Now.',
              value: 491,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Finish.',
              value: 992,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Meet find.',
              value: 718,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Ten.',
              value: 479,
              color: '#FF0077',
              line: []
            },
            {
              name: 'After for.',
              value: 742,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Special.',
              value: 842,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Sure skin.',
              value: 118,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Audience.',
              value: 765,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Price we.',
              value: 714,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Produce.',
              value: 121,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Both.',
              value: 979,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Step mind.',
              value: 246,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Other.',
              value: 591,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Middle.',
              value: 178,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Market.',
              value: 897,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Entire.',
              value: 128,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Fish.',
              value: 617,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Ago what.',
              value: 559,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Score.',
              value: 338,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Clear.',
              value: 738,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Me.',
              value: 770,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Relate.',
              value: 58,
              color: '#42526e',
              line: []
            },
            {
              name: 'Easy.',
              value: 843,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Small.',
              value: 621,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Various.',
              value: 104,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Since.',
              value: 673,
              color: '#FF0077',
              line: []
            },
            {
              name: 'History.',
              value: 276,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Which.',
              value: 107,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Including.',
              value: 708,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Type.',
              value: 289,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Foreign.',
              value: 599,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Condition.',
              value: 898,
              color: '#FF0077',
              line: []
            },
            {
              name: 'What.',
              value: 677,
              color: '#FF0077',
              line: []
            },
            {
              name: 'By range.',
              value: 547,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Nice.',
              value: 459,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Within.',
              value: 768,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Better.',
              value: 795,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Offer.',
              value: 334,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Project.',
              value: 581,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Artist.',
              value: 489,
              color: '#FF0077',
              line: []
            },
            {
              name: 'For.',
              value: 722,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Current.',
              value: 76,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Wife.',
              value: 721,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Direction.',
              value: 286,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Include.',
              value: 785,
              color: '#FF0077',
              line: []
            },
            {
              name: 'East.',
              value: 778,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Want.',
              value: 461,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Hotel.',
              value: 0,
              color: '#1C7BDC',
              line: []
            },
            {
              name: 'Enough.',
              value: 563,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Clear the.',
              value: 829,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Receive.',
              value: 659,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Strong.',
              value: 797,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Cultural.',
              value: 111,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Clearly.',
              value: 640,
              color: '#FF0077',
              line: []
            },
            {
              name: 'Make high.',
              value: 57,
              color: '#42526e',
              line: []
            },
            {
              name: 'Last he.',
              value: 348,
              color: '#FF0077',
              line: []
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <HoneycombChart className='honeycom-chart' option={this.state.option} />
    )
  }
}

export default HoneycombChartExample
