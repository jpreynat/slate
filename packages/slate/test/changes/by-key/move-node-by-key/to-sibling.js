/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  change.moveNodeByKey('a', 'b', 1)
}

export const input = (
  <state>
    <document>
      <paragraph key="a">
        <cursor />one
      </paragraph>
      <quote key="b">
        <paragraph>
          two
        </paragraph>
      </quote>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <quote>
        <paragraph>
          two
        </paragraph>
        <paragraph>
          <cursor />one
        </paragraph>
      </quote>
    </document>
  </state>
)
