clingo_version=${CLINGO_VERSION=5.4.0}

wget -qc "https://github.com/potassco/clingo/archive/v${clingo_version}.tar.gz"
tar xf "v${clingo_version}.tar.gz"
mkdir -p build
cmake -H"clingo-${clingo_version}" -Bbuild -DCMAKE_BUILD_TYPE=Release -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYCLINGO_USER_INSTALL=off
cmake --build build --target install
