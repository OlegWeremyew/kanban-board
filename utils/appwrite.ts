import {Account, Client, Databases, Storage} from 'appwrite'
import {APP_WRITE_ID} from "~/app.constants";

export {ID} from 'appwrite'
export const client: Client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APP_WRITE_ID)

export const account: Account = new Account(client)
export const DB: Databases = new Databases(client)
export const storage: Storage = new Storage(client)
