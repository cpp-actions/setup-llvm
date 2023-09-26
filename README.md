# Setup LLVM & Clang toolchain

🚀 Installs LLVM/Clang and friends for GitHub Actions

<p align=center>
  <img src="">
</p>

## Usage

**Here's what you're after 🚀**

```yml
- uses: cpp-actions/setup-llvm-toolchain@v1
```

### Inputs

- **`llvm-version`:** A specific version of the LLVM toolchain to install.

- **`set-bin`:** Whether or not to set the `cc` and `c++` binaries to `clang` and `clang++` respectively. By default this is `false`.

- **`set-env`:** Whether or not to set the `$CC` and `$CXX` env vars to `clang` and `clang++` respectively. By default this is `true`.
