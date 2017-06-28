package dao

import (
	"crypto/rand"
	"math/big"
)

var (
	chars = "abcdefghijklmnopqrstuvwxyz0123456789"
)

func newKey(prefix string, length int) string {
	token := make([]byte, length)
	for ii := 0; ii < length; ii++ {
		n, err := rand.Int(rand.Reader, big.NewInt(int64(len(chars))))
		if err != nil {
			// This should never happen
			panic(err)
		}
		token[ii] = chars[n.Uint64()]
	}

	return prefix + string(token)
}
