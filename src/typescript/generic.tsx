export type Geschenk<T> = {
    geschenkPapierFabe: string
    inhalt: T
}
type Lego = unknown

type LegoGeschenk = Geschenk<Lego>

function test<T>(value: T) {
    console.log('hello world')
}

const test2: <T>(value: T) => void = (value) => {
    console.log('hello world 2')
}
