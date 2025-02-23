#include <iostream>
int main(){
    double c {3.14};
    double z {c*6};
    int zezika {2};
    std::cout << z << std::endl;
    z=z* 12;
    std::cout << "Next  z :"<< z << std::endl;
    z=z-zezika;
    std::cout<< "Final z :"<< z;
    return 0;
}