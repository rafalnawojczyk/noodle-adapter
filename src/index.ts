import NoodleAdapter from './NoodleAdapterModule';

export function getScramble(
    cube:
        | '333'
        | '222'
        | '444'
        | '555'
        | '666'
        | '777'
        | 'clock'
        | 'pyram'
        | 'sq1'
        | 'skewb'
        | 'minx'
        | '333oh'
        | '333fmc'
        | '333bf'
        | '444bf'
        | '555bf'
): string {
    return NoodleAdapter.getScramble(cube);
}
