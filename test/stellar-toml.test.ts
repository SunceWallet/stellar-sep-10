import { test } from "uvu"
import * as assert from "uvu/assert";
import { Horizon } from "@stellar/stellar-sdk"
import { fetchWebAuthData } from "../src/index"

test("fetchWebAuthData() can fetch the stellarport.io auth endpoint URL", async () => {
  const horizon = new Horizon.Server("https://horizon.stellar.org/")
  const webauth = await fetchWebAuthData(
    horizon,
    "GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5"
  )

  if (!webauth) {
    return assert.unreachable("Could not fetch all web auth data.")
  }

  assert.is(webauth.endpointURL, "https://api.stellarport.io/Authentication")
  assert.is(
    webauth.signingKey,
    "GABWHTAVRYF2MCNDR5YC5SC3JTZQBGDZ3HKI4QAREV5533VU43W4HJUX"
  )
})

test.run();