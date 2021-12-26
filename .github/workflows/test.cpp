#include <math.h>
#include <iostream>
#include <vector>

using std::vector;

long double fact(int N)
{
    if (N < 0)
        return 0;
    if (N == 0)
        return 1;
    else
        return N * fact(N - 1);
}
double SxFunction(double x)
{
    return (1 + pow(x, 2)) * exp(pow(x, 2));
}

double YxFunction(double x, int n)
{
    double res = 0;
    for (int i = 0; i < n; i++)
    {
        res += (2 * n + 1) / fact(n) * pow(x, 2 * n);
    }
    return res;
}


vector<double> getResultArr(double a, double b)
{
    vector<double> arr;
    double step = (b - a) / 10; //h = (b – a)/10
    for (double i = a; i <= b; i += step){
        arr.push_back(SxFunction(i));
    }
    return arr;
}

vector<double> getFinalArr(int n, vector<double> arr){
    vector<double> newArr;
    for(auto iter = arr.begin(); iter != arr.end(); ++iter)
        {
            newArr.push_back(YxFunction(*iter, n));
        }
    return newArr;
}
template < typename T >
void printArr(vector<T> arr){
    for(auto iter = arr.begin(); iter != arr.end(); ++iter)
        {
            std::cout << *iter << " ";
        }
}

int main()
{
    double a = 0.1;
    double b = 1;
    int n = 140;
    vector<double> arr = getResultArr(a,b);
    vector<double> finalArr = getFinalArr(n,arr);
    std::cout << "Y(x):";
    printArr<double>(arr);
    std::cout << "S(x):";
    printArr<double>(finalArr);
    return 0;
}
